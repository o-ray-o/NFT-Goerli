async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

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
