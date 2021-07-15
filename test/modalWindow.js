export let modalWindowStr = `<div class="modalwindow" id=modalwindow>
<button onclick="cross('modalwindow')">Закрыть</button>
<div class="data-input">
    <h3>Выберите тип хоспота:</h3>
    <div class="data-radio">
        <label for="info">Информация</label>
        <input type="radio" name="hotspot" id="info">
        <label for="scene">Сцена</label>
        <input type="radio" name="hotspot" id="scene">
    </div>
    <button onclick="makeNewHotSpot()">Сохранить</button>
    <button onclick="deleteHotSpot()">Удалить</button>
</div>
`;