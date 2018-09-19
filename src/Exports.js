
    export const getMatches = async (id) => {
        const req =  await fetch(`http://localhost:1234/api/matches/${id}`)
        const res = await req.json()
        return res
     }
 
     export const gethero = async () => {
         const req = await fetch('http://localhost:1234/api/heroes')
         const res = await req.json()
         return res
     }

     export const getNews = async () =>{
        const req = await fetch('http://localhost:1234/api/redditnews')
        const res = await req.json()
        return res
    }

    export const getUpdates = async () =>{
        const req = await fetch('http://localhost:1234/api/updates')
        const res = await req.json()
        return res
    }

    export const getPlayerInfo = async (id) => {
        const req = await fetch(`http://localhost:1234/api/player/${id}`)
        const res = await req.json()
        return res
      }

    export const getPlayerHeroes = async (id) => {
        const req = await fetch(`http://localhost:1234/api/profile/${id}`)
        const res = await req.json()
        return res
    }  