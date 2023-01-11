let selected = [];
const objectPoints = {
  'object-1': 20,
  'object-2': 40
  // key-value pairs for the rest of objects
};
let totalPoints = 0;

function addObject(el) {
  let id = el.id;
  let points = objectPoints[id];
  // check if the object is already selected
  if (selected.includes(id)) {
    // remove the object from the selection array
    selected = selected.filter(object => object !== id);
    // substract the point cost from the total
    totalPoints -= points;
  } else {
    // check if adding the object to the selection 
    // array would exceed the point limit
    if (totalPoints + points > 2000) {
        alert('The point limit has been reached');
        return;
    }
    // add the object to the selection array
    selected.push(id);
    // add the point cost to the total
    totalPoints += points;
  }
  // update the point tally display
  document.getElementById("point-tally").innerHTML = totalPoints;
}

function resetSelections() {
    selected = [];
    totalPoints = 0;
    document.getElementById("point-tally").innerHTML = totalPoints;
    // un-select all objects 
    const selectedButtons = document.querySelectorAll("button[selected]");
    selectedButtons.forEach(btn => btn.removeAttribute("selected"));
  }
  