const express = require('express');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = PlaidEnvironments.sandbox;

const configuration = new Configuration({
    basePath: PLAID_ENV,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
            'PLAID-SECRET': PLAID_SECRET,
        },
    },
});

const client = new PlaidApi(configuration);

app.post('/create_link_token', async (req, res) => {
    try {
        const response = await client.linkTokenCreate({
            user: {
                client_user_id: 'unique-user-id',
            },
            client_name: 'Your App Name',
            products: ['auth', 'transactions'],
            country_codes: ['US'],
            language: 'en',
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error creating link token:', error);
        res.status(500).send('Error creating link token');
    }
});

app.post('/exchange_public_token', async (req, res) => {
    const { public_token } = req.body;
    try {
        const response = await client.itemPublicTokenExchange({
            public_token,
        });
        const accessToken = response.data.access_token;
        const itemId = response.data.item_id;
        res.json({ accessToken, itemId });
    } catch (error) {
        console.error('Error exchanging public token:', error);
        res.status(500).send('Error exchanging public token');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
