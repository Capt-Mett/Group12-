// Button event
const requestAccess_btn = document.getElementById("requestAccess");
const requestAccessClick = () => {
  // click function
  alert(
    "Contact Dyson admin to request access to Dyson Prototype Access at Dyson_admin@gmail.com"
  );
};
requestAccess_btn.addEventListener("click", requestAccessClick);

// Real time Form validation
const usernameGroup = document.querySelector("#username-group");
const passwordGroup = document.querySelector("#password-group");
const username = document.getElementById("username");
const password = document.getElementById("password");
const signInButton = document.getElementById("signInButton");

const errorText = (text) => {
  const displayError = document.createElement("p");
  displayError.textContent = text;
  return displayError;
};

// username validation
const validateUsername = () => {
  // console.log("Username validation triggered");
  let isValid = true;
  if (username.value === "") {
    // Check for empty value
    isValid = false;
    username.classList.add("invalid");
  } else {
    username.classList.remove("invalid"); // remove once password is in valid format
  }
  return isValid;
};

const validatePassword = () => {
  // console.log("Password validation triggered");
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let isValid = true; // assumed input is valid

  // Remove exsiting error text
  const existingError = document.querySelector(".passwordErrorText");
  if (existingError) {
    // if exsitingError = true
    existingError.remove(); // remove it
  }

  // validate input with regex object
  if (!regex.test(password.value)) {
    isValid = false;
    password.classList.add("invalid");

    // Create error message
    if (!existingError) {
      // if existingError is false (not exist)
      const passwordError = document.createElement("p");
      passwordError.textContent =
        "Password must contain at least 8 character with lower/Upper letter, number, and a special character";
      passwordError.classList.add("passwordErrorText");

      passwordGroup.appendChild(passwordError);
    }
  } else {
    password.classList.remove("invalid");
    password.classList.add("valid");
    console.log("Password is valid");
  }

  return isValid; // return validation result at the end
};

// add interaction to html
username.addEventListener("keyup", validateUsername);
password.addEventListener("blur", validatePassword);

signInButton.addEventListener("click", (event) => {
  if (!validatePassword()) {
    console.log("Error password validation");
    event.preventDefault(); // Prevent form submission if validation fails
  } else {
    let data = [];
    let url = "https://api.restful-api.dev/objects";
    if (true) {
      data = {
        name: "Apple MacBook Pro 16",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      };
    } else {
      url = "https://xxxxxxx/login";
      data = {};
    }

    axios
      .post(url, data)
      .then(function (response) {
        let strResult =
          '{"code":1,"msg":"success","data":"eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoyLCJ1c2VySWQiOjEwMDA2LCJ1c2VybmFtZSI6ImVtbWF3aWxzb24iLCJzdWIiOiJlbW1hd2lsc29uIiwiZXhwIjoxNzE0NzA0OTQyfQ.Rc_C0LhX0PZQd7uUixJtZuQClfZIKvhfO-FabWpllB8"}';
        let parseResult = JSON.parse(strResult);
        if (
          parseResult != undefined &&
          parseResult != null &&
          parseResult.code == 1
        ) {
          LogIn(parseResult.data, "../");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

// Method to send data for backend
async function loginUser() {
  // Get user input from HTML form fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Create the request body in JSON format
  const requestBody = {
    userName: username,
    password: password,
  };

  try {
    // try catch for error handling
    // Send the POST request to the backend using Axios
    const response = await axios.post("...", requestBody); // destination url

    if (response.status === 200 && response.data.status === "success") {
      // Store the received JWT in local storage or handle it as needed
      localStorage.setItem("jwt", response.data.data);
      console.log("Login successful, JWT stored");
      // Redirect or perform additional actions after successful login
    } else {
      // Handle errors, such as incorrect username or password
      console.error("Login failed:", response.data.message);
    }
  } catch (error) {
    // Handle network errors or issues with the Axios operation
    console.error("Network or other error", error);
  }
}

// Example HTML form elements for username and password
// <input type="text" id="username" placeholder="Enter Username">
// <input type="password" id="password" placeholder="Enter Password">
// <button onclick="loginUser()">Login</button>
