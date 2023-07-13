function findAvailableSeats(seats,nums){
    let ans=[],row=seats[0].row
    for(let i=0;i<seats.length;i++){
     if(nums==ans.length){
      return ans
      }
      else if(row===seats[i].row){
        ans.push(seats[i])
      }
      else {
        row=seats[i].row
        
        ans=[]
        ans.push(seats[i])
      }
    }
      for(let el of seats){
        if(ans.length===nums){
          return ans
        }
        ans.push(el)
      }
    return ans
  }

  function markSeatsAsBooked(seats, bookedSeats) {
    for (let i = 0; i < bookedSeats.length; i++) {
      seats.find((o) => {
        if (o.number === bookedSeats[i].number) {
          return (o.isBooked = true);
        }
      });
    }
    return seats
  }
  function markAllSeatsAsAvailabale(seats) {
    for (let el of seats) {
        el.isBooked=false
    }
    return seats
  }
  module.exports={
    markSeatsAsBooked,findAvailableSeats,markAllSeatsAsAvailabale
  }
