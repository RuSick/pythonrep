export const apiModule = {
  getUser: () => {
    return fetch("/user", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "GET",
    });
  },

  authUser: () => {
    return fetch("/api/token", {
      method: "POST",
    });
  },

  getUserJogs: () => {
    return fetch("/user/jogging", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "GET",
    });
  },

  addJog: (data) => {
    return fetch("/jogging", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  editJog: (data) => {
    return fetch("/jogging/<jog_id>", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "PUT",
      body: JSON.stringify(data),
    });
  },
};
