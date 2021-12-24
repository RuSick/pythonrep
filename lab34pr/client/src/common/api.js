export const apiModule = {
  getUser: () => {
    return fetch("/api/user", {
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
    return fetch("/api/user/jogging", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "GET",
    });
  },

  addJog: (data) => {
    return fetch("/api/jogging", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  editJog: (data) => {
    return fetch("/api/jogging/" + data.id, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jogging_token")}`,
      },
      method: "PUT",
      body: JSON.stringify(data),
    });
  },
};
