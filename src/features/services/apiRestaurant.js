const API_URL = import.meta.env.VITE_API_URL;

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw new Error('Failed getting menu');

  const resData = await res.json();
  return resData.data ? resData.data : resData;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const resData = await res.json();
  return resData.data ? resData.data : resData;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error();
    const resData = await res.json();
    return resData.data ? resData.data : resData;
  } catch (err) {
    throw new Error('Failed creating your cake order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error();
  } catch (err) {
    throw new Error('Failed updating your cake order');
  }
}