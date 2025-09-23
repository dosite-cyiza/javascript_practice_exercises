

const  premierLeagueStandings = (teamStandings) =>{
    // Insert Code here

let n = []
for (let [i,values] of Object.entries(teamStandings)){
    if(i == 1) continue;
    n.push(values)

}

let sorted = n.sort()
sorted.unshift(teamStandings['1'])
let p = {}
let f =  sorted.map((d,i)=>{
  Object.assign(p,({[i+1]:d}))
}) 

return p;
    
  }
  let lastSeasonTeams = {1:'Leeds United', 2:'Liverpool',3:'Manchester City',4:'Coventry',5:'Arsenal'}

  premierLeagueStandings(lastSeasonTeams)