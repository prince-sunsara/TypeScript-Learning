console.log("Hello, World!");

const getUserName = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector(".form") as HTMLFormElement;
const main_container = document.querySelector(".main_container") as HTMLElement;

// lets define the contract of an object
interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  url: string;
}

// reusable function
async function myCustomFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Network response was not ok - status ${response.status}`);
  }

  const data = await response.json();
  return data;
}

function showResultUI(user: UserData) {
  return main_container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <a href=${user.url}>
            <img src=${user.avatar_url} alt=${user.login} />
            <hr />
            <div class="card-footer">
                <p>${user.login}</p>
                <a href=${user.url}>Github</a>
                <img src=${user.avatar_url} alt=${user.login} />
            </div>
        
        </a>
    </div>`
  );
}

function fetchUserData(url: string) {
  myCustomFetch<UserData[]>(url, {}).then((users) => {
    users.forEach((user) => {
      showResultUI(user);
    });
  });
}

// default function call
fetchUserData("https://api.github.com/users");

// perform serach function
formSubmit.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchItem = getUserName.value.toLowerCase();

  try {
    const url = "https://api.github.com/users";
    await myCustomFetch<UserData[]>(url, {}).then((users) => {
      const searchedUser = users.filter((user) => {
        return user.login.toLowerCase().includes(searchItem);
      });

      // clear the previous data
      main_container.innerHTML = "";

      if (searchedUser.length === 0) {
        const p = document.createElement("p");
        p.innerHTML = `<p class="empty-para"> No Data found.</p>`;
        main_container?.insertAdjacentElement("beforeend", p);
      } else {
        for (const user of searchedUser) {
          showResultUI(user);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});
