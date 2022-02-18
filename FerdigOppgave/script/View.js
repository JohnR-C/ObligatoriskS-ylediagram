show();
function show() {
  let svgInnerHtml = "";
  for (let i = 0; i < numbers.length; i++) {
    svgInnerHtml += createBar(numbers[i], i + 1);
  }
  contentDiv.innerHTML = `
       <svg class="svg" id="chart" width="800" height="800" viewBox="0 -2 110 110">
           ${svgInnerHtml}
       </svg><br/>
       Valgt stolpe: <i>${chosenBar ? chosenBar : "ingen"}</i></br/> 
   
       <br />
       Verdi:     
       
       <input id="input" type="number" min="1" max="10"  oninput="inputValue = this.value" />
       <button id="button" onclick="
       operator.add()">Legg til stolpe</button>
       <button id="button" onclick="
       operator.change()" ${
         buttonBool ? "disabled" : ""
       }>Endre valgt stolpe</button>
       <button id="button" onclick="
       operator.remove()" ${
         buttonBool ? "disabled" : ""
       }>Fjerne valgt stolpe</button>
       <div class="error${
         error ? "active" : "based"
       }"<strong> bare tall fra  1 til 10 er gyldige</strong></div>
       `;
}

function createBar(number, barNo) {
  const width = 9;
  const spacing = 1;
  let x = (barNo - 1) * (width + spacing);
  let height = number * 12;
  let y = 102 - height;
  let color = calcColor(1, 10, barNo);
  return `<rect id="${barNo}" class="rect ${
    barNo === chosenBar ? "active" : ""
  }" width="${width}" height="${height}" x="${
    x + spacing
  }" y="${y}" fill="${color}"  onclick="
  operator.valgtSøyle(parseInt(this.id))"></rect>`;
}

function calcColor(min, max, val) {
  var minHue = 240,
    maxHue = 0;
  var curPercent = (val - min) / (max - min);
  var colString = `hsl(${curPercent * (maxHue - minHue) + minHue},100%,50%)`;
  return colString;
}
