const BASE_URL = import.meta.env.VITE_API_URL;

export async function initGame() {
    const   res = await fetch(`${BASE_URL}/players/init-time`,{
        method: "POST",
        credentials:"include"
    });
    return res.json();
}


export async function finishGame(username) {
    const res= await fetch (`${BASE_URL}/players/final-time`,{
        method:"POST",
        credentials:"include",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({username})
    });
      return res.json();
}

export async function getLeaderboard(){
    const res = await fetch (`${BASE_URL}/players`,{
            credentials: "include",
    });
    return res.json();
}

export async function getCharacters() {
  const res = await fetch(`${BASE_URL}/characters`, {
    credentials: "include",
  });
  return res.json(); // devuelve array de personajes de la DB
}