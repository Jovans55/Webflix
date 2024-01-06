const getData = async (email, password) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/users?email=${email}&password=${password}`,
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

export { getData, postData };