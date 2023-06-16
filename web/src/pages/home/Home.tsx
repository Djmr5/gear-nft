import { MintNFT } from "./MintNFT";
import { ReadStateNFT } from "./ReadStateNFT";
import { TransferNFT } from "./TransferNFT";
import { BurnNFT } from "./BurnNFT";


function Home() {
  return <div>
    <h1>Welcome!</h1>
    <h2>Use the search bar to look at the ip address from a certain webpage and navigate to it</h2>
    <h2>Use the mint button to create a new DDNS NFT with an ipv6 address and your domain name</h2>
    <h2>Use the transfer button to interchange the ipv6 domain name</h2>
    <h2>Use the burn button to delete your DDNS NFT</h2>
    <MintNFT />
    <ReadStateNFT />
    <TransferNFT />
    <BurnNFT />
    </div>;
}

export { Home };
