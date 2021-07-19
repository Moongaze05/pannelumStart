export let modalWindowStr = `<div class="modalwindow" id=modalwindow>
<button onclick="cross('modalwindow')">Закрыть</button>
<div class="data-input">
    <h3>Выберите тип хоспота:</h3>
    <div class="data-radio">
        <input type="radio" name="hotspot" id="info">
        <label for="info">Информация</label>
        <input type="radio" name="hotspot" id="scene">
        <label for="scene">Сцена</label>
    </div>
    <button onclick="makeNewHotSpot(),cross('modalwindow')">Сохранить</button>
    <button onclick="deleteNewHotSpot(),cross('modalwindow')">Удалить</button>
</div>
`;