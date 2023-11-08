export async function userSignIn(formData) {
  const res = await fetch("/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
}

export async function createListing(formData, currentUser) {
  const res = await fetch("/api/listing/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      userRef: currentUser._id,
    }),
  });
  const data = await res.json();
  return data;
}

export async function getListings(params) {
  const res = await fetch(`/api/listing/get?${params}&limit=4`);
  const data = await res.json();
  return data;
}

export async function getListingById(params) {
  const res = await fetch(`/api/listing/get/${params.listingId}`);
  const data = await res.json();
  return data;
}

export async function updateUser(currentUser, formData) {
  const res = await fetch(`/api/user/update/${currentUser._id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
}

export async function deleteUser(currentUser) {
  const res = await fetch(`/api/user/delete/${currentUser._id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}

export async function signOutUser() {
  const res = await fetch("/api/auth/signout");
  const data = await res.json();
  return data;
}

export async function getUserListings(currentUser) {
  const res = await fetch(`/api/user/listings/${currentUser._id}`);
  const data = await res.json();
  return data;
}

export async function deleteUserlisting(listingId) {
  const res = await fetch(`/api/listing/delete/${listingId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}

export async function searchListings(searchQuery) {
  const res = await fetch(`/api/listing/get?${searchQuery}`);
  const data = await res.json();
  return data;
}

export async function getSearchListings(searchQuery) {
  const res = await fetch(`/api/listing/get?${searchQuery}`);
  const data = await res.json();
  return data;
}

export async function userSignUp(formData) {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
}

export async function updateListing(params, formData, currentUser) {
  const res = await fetch(`/api/listing/update/${params.listingId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      userRef: currentUser._id,
    }),
  });
  const data = await res.json();
  return data;
}
