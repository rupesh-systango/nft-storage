import { NFTStorage, File } from "nft.storage";
import { pack } from "ipfs-car/pack";
let metadata;
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM5MTM1MzQzRjJkNDQwMkY2NmY1YTdBYjgxN2M5Mjk4Njk4MUZmM0YiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0Mzk4NDUwOTA1MiwibmFtZSI6IlRlc3QgMSJ9.ah9jRuUZXXIXduc718emSGihETgKawB_Far5ZmSX3KY";
const client = new NFTStorage({ token: apiKey });

async function test() {
  metadata = await client.store({
    name: "Pinpie",
    description: "Pin is not delicious beef!",
    image: new File(
      [
        /* data */
      ],
      "logo.jpeg",
      { type: "image/jpeg" }
    ),
  });
  console.log("Check" + metadata.url);
}

test();
//console.log(metadata);
