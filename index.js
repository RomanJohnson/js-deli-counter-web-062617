console.log ('hello')
var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){
katzDeliLine.push(newPerson);
return (`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`)
}

 function nowServing(line){

  if (line.length===0) {
    return "There is nobody waiting to be served!"
  } else{
    return (`Currently serving ${line.shift()}.`)
    line.splice(0, 1)
  }
}

function currentLine(line){
  if (line.length ===0){
    return "The line is currently empty."
  }
  else{
    var result = "The line is currently: "
    for (let i = 0; i<line.length; i++){
      result +=(i+1) + ". " + line[i] + ", "
    }
      return result.substring(0, result.length-2)
  }
}
