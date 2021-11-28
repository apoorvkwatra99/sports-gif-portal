# Sports GIF Portal

The project can be viewed here: https://sports-gif-portal.apoorvk.repl.co/

This Buildspace project runs on the Solana Devnet. A Phantom wallet with some Solana on this dev network is all that is needed to test it out! Once a user clicks the link, they can connect their Phantom wallet and then send in GIFs of their favorite sports moments to be stored through the contract. These GIFs can be seen by anyone who connects their wallet, and they each have a "Submitted by" field associated with them.

# Backend

The backend folder is where all the smart contract code lives. `programs/solanagifs/src/lib.rs` contains the program `solanagifs` which has the functions `start_stuff_off` and `add_gif`. There are also accounts such as `GifStruct` and `BaseAccount` which contain data for the contract to use. The `tests/solanagifs.js` file was mainly used for testing, and the `scripts/deploy.js` script was used to actually deploy the contract.

# Frontend

The frontend folder contains all the code written on Replit. It builds out the actual web page that is linked at the top of this file and calls the contract in the backend. `src/App.js` contains most of the code written here.
