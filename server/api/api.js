const getData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/api/users${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
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
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
