import { createHelia } from "helia";
import { dagJson } from "@helia/dag-json";

async function run() {
  const helia = await createHelia();
  const ipfs = dagJson(helia);

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "My First NFT",
      attributes: [
        {
          trait_type: "Room",
          value: "10",
        },
        {
          trait_type: "Tables",
          value: "100",
        },
        {
          trait_type: "Chairs",
          value: "1000",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmcMZQM3Zt66ufTGxNTy8Yn96N7UJXD7j26Gpbu6YxfYhh",
      description: "A room!",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
