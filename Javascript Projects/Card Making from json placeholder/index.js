const mainbody = document.querySelector(".mainbody");

async function GetJsonPlaceholderData() {
  const responcedata = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const Data = await responcedata.json();

  Data.forEach((element) => {
    mainbody.innerHTML += `<div class="cardinfo">
        <img src="https://picsum.photos/50/50" alt="Image" class="imgforcard">
        <div class="getinfodetailsfromapi">
            <p class="username">
                ${element.username}
            </p>
            <p class="email">
                ${element.email}
            </p>
            <p class="address">
                ${element.address.street}
            </p>
        </div>
    </div>
</div>`;
  });
}

GetJsonPlaceholderData();
