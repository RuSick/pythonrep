export const apiModule = {
  getUser: () => {
    return fetch("https://jogtracker.herokuapp.com/api/v1/auth/user", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "GET",
    });
  },

  authUser: () => {
    const formData = new FormData();
    formData.append("uuid", "hello");
    return fetch("https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin", {
      method: "POST",
      body: formData,
    });
  },

  getUserJogs: () => {
    return fetch("https://jogtracker.herokuapp.com/api/v1/data/sync", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "GET",
    });
  },

  addJog: (data) => {
    return fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "POST",
      body: data,
    });
  },

  editJog: (data) => {
    return fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "PUT",
      body: data,
    });
  },
};
