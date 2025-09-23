
/*
The new football league season is coming and the Football Association need some help resetting the league standings. Normally the initial league standing is done in alphabetical order (from A to Z) but this year the FA have decided to freshen it up.

It has been decided that team who finished first last season will begin the next season in first place. Regardless of what letter their club begins with. e.g. if Manchester City were in first place last year, they will begin the season in position one. All other teams should be in alphabetical order.

The teams will be fed in as an object ({}). The key will be will be their position from last season and the value is the club's name e.g. Arsenal.

The output should be an object ({}) with the key as the club's starting position for the new season and the value should be club's name e.g. Arsenal.

For example. If in the previous season the standings were:

1:'Leeds United' 2:'Liverpool' 3:'Manchester City' 4:'Coventry' 5:'Arsenal'

Then the new season standings should

1:'Leeds United' (first last season) 2:'Arsenal' (alphabetical) 3:'Coventry' (alphabetical) 4:'Liverpool' (alphabetical) 5:'Manchester City' (alphabetical)



*/





const  premierLeagueStandings = (teamStandings) =>{
    // Insert Code here
    let lastSeasonTeams = {1:'Leeds United', 
                           2:'Liverpool',
                           3:'Manchester City',
                           4:'Coventry',
                           5:'Arsenal'
                          }
    let newSeasonTeams = {}
    let newArr = []
    let i = 2
    for(let element in lastSeasonTeams){
      if(element == 1){
        newSeasonTeams[element] = lastSeasonTeams[element]
      }else{
        newArr.push(lastSeasonTeams[element]);
      }
    }
    newArr.sort().map(element=>{
      newSeasonTeams[i] = element;
      i++
    })
    return newSeasonTeams;
  //   return newSeasonTeams[0] === lastSeasonTeams[0] && newSeasonTeams.values.sort()
  }
  console.log(premierLeagueStandings())




  //////////////////////////////////////////second way

  let previousSeason = {1:'Leeds United' ,2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'}

let firstPrevoious = previousSeason[1];
let team = Object.values(previousSeason)
team = team.sort((a,b)=>a.localeCompare(b));
let filteredTeam = team.filter(element=>element !==firstPrevoious)
filteredTeam.unshift(firstPrevoious)
let last =0;
let position =2;

let newSeasonTeam =filteredTeam.map((value,index)=>index ===0 ?`${last+1}: ${value}'(first last season) :${position++}: '${value}'(alphabetical) `).join("")
console.log(newSeasonTeam)