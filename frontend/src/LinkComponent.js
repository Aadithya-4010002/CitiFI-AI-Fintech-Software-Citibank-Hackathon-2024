import React, { useEffect, useState } from 'react';
import { PlaidLink } from 'react-plaid-link';
import axios from 'axios';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';


const LinkComponent = () => {
    const [linkToken, setLinkToken] = useState(null);

    useEffect(() => {
        const createLinkToken = async () => {
            try {
                const response = await axios.post('http://localhost:3000/create_link_token');
                setLinkToken(response.data.link_token);
            } catch (error) {
                console.error('Error creating link token:', error);
            }
        };
        createLinkToken();
    }, []);

    const onSuccess = async (public_token) => {
        try {
            const response = await axios.post('http://localhost:3000/exchange_public_token', {
                public_token,
            });
            console.log('Access Token:', response.data.accessToken);
        } catch (error) {
            console.error('Error exchanging public token:', error);
        }
    };

    return (

            
        linkToken ? (
            <PlaidLink
                token={linkToken}
                onSuccess={onSuccess}
                onExit={(error) => console.log('Exit:', error)}
            >
                Connect Your Bank Account
            </PlaidLink>
        ) : (
            <div>Loading...</div>
        )
 );
   
      };

export default LinkComponent;
