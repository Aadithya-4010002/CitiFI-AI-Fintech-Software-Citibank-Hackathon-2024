import os
import streamlit as st
from openai import OpenAI
from dotenv import load_dotenv, dotenv_values 
load_dotenv() 

# Set up your API keys
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

# Initialize clients
openai_client = OpenAI(api_key=os.environ['OPENAI_API_KEY'])

# Streamlit app
st.title("Financial Chat Bot")



# User input for the prompt
prompt = st.text_area("Enter your prompt here:")

# Slider for max tokens
max_tokens = 50
#st.slider("Max tokens:", min_value=10, max_value=1000, value=150)

# Slider for temperature
temperature = 0.01
#st.slider("Temperature:", min_value=0.0, max_value=1.0, value=0.02)

if st.button("Generate"):
    if prompt:
            # Call the GPT-4o API
            completion = openai_client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "user", "content": prompt}
                ],
                max_tokens=max_tokens,
                temperature=temperature,
                n=1,
                stop=None
            )

            # Get the generated text
            generated_text = completion.choices[0].message.content
            print(completion)
            st.write(generated_text)
    else:
        st.error("Please enter a prompt.")
