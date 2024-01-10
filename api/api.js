const singInAPI = async (email, password) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/signin?email=${email}&password=${password}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

const getData = async (token) => {
  try {
    const response = await fetch("http://localhost:3001/api/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const postData = async (firstName, lastName, email, password) => {
  try {
    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export { singInAPI, getData, postData };
