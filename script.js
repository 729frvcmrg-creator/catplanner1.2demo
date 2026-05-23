/* ---------- Базовый Dark Theme + Градиент (Оригинал) ---------- */
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    font-family: system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, #ff6f00, #000000);
    color: #e0e0e0;
    min-height: 100vh;
    padding-bottom: 40px;
}

/* ---------- Glassmorphism (Полупрозрачные карточки) ---------- */
.glass {
    background: rgba(20, 20, 20, 0.45);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 1.5rem;
}

/* ---------- Header & Layout ---------- */
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 1rem auto;
    max-width: 1000px;
}

.header-controls {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

h1 { margin-bottom: 1rem; text-align: center; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }

.btn-glass {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease;
}
.btn-glass:hover { background: rgba(255, 255, 255, 0.2); transform: translateY(-2px); }

.btn-accent { background: #ffca28; color: #000; border: none; }
.btn-accent:hover { background: #ffa726; }

/* ---------- Кот и Шкала Счастья ---------- */
.cat-container { display: flex; flex-direction: column; align-items: center; gap: 10px; margin-bottom: 1rem; }
.cat img { width: 120px; height: 120px; object-fit: contain; filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.3)); }
.happiness-scale { width: 220px; text-align: center; }
.scale-label { font-size: 0.85rem; opacity: 0.8; margin-bottom: 4px; }
.progress-bar { width: 100%; height: 12px; background: rgba(0, 0, 0, 0.4); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
.progress-fill { height: 100%; width: 0%; background: linear-gradient(90deg, #ff5252, #ffca28, #4caf50); transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.percent-text { font-size: 0.8rem; margin-top: 4px; font-weight: bold; color: #ffca28; }

/* ---------- Main Grid ---------- */
main { max-width: 1000px; margin: 0 auto; padding: 0 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
@media (max-width: 768px) { main { grid-template-columns: 1fr; } }

/* ---------- Календарь ---------- */
.month-selector { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.month-selector button { background: #1976d2; color: #fff; border: none; padding: .3rem .8rem; border-radius: 4px; cursor: pointer; transition: transform .15s ease; }
.month-selector button:hover:not(:disabled) { transform: scale(1.1); background: #2196f3; }
.month-selector button:disabled { opacity: 0.3; cursor: not-allowed; }
.month-selector span { font-weight: bold; font-size: 1.1rem; text-transform: capitalize; }

table { width: 100%; border-collapse: collapse; table-layout: fixed; }
th, td { padding: .5rem; text-align: center; font-size: .95rem; }
td { cursor: pointer; border-radius: 6px; transition: background .2s; height: 60px; vertical-align: top; position: relative; }
td.empty { cursor: default; }
td.today { background: rgba(255, 202, 40, 0.25); border: 1px solid rgba(255, 202, 40, 0.5); }
td.selected {
    background: #4a00e0;
    background-image: radial-gradient(at 20% 20%, #4a00e0 0%, transparent 50%), radial-gradient(at 80% 80%, #8e2de2 0%, transparent 50%);
    color: #fff; box-shadow: inset 0 0 15px rgba(0,0,0,0.5);
}

/* ОСОБЫЙ ЦВЕТ ДЛЯ ДНЕЙ С ВЫБРАННЫМИ ПОВТОРАМИ */
td.special-day {
    background: rgba(255, 202, 40, 0.15);
    border: 1px solid rgba(255, 202, 40, 0.4);
    color: #ffca28;
    font-weight: bold;
}
td.special-day.selected {
    background: #4a00e0; /* Сохраняем фиолетовый при выделении */
    color: #fff;
    border-color: #ffca28;
}

td.has-tasks::after { content: ''; position: absolute; bottom: 6px; left: 50%; transform: translateX(-50%); width: 6px; height: 6px; background: #4caf50; border-radius: 50%; box-shadow: 0 0 4px #4caf50; }

/* ---------- Задачи ---------- */
.task-panel h2 { margin-bottom: 1rem; font-size: 1.2rem; }
.add-task { margin-bottom: 1rem; }
#addTaskBtn { width: 100%; padding: .6rem; background: #4caf50; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; transition: transform .15s; }
#addTaskBtn:hover { transform: scale(1.02); background: #43a047; }
.filters select { width: 100%; padding: 8px; margin-bottom: 1rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 4px; }
ul { list-style: none; max-height: 500px; overflow-y: auto; padding-right: 5px; }
li { display: flex; align-items: flex-start; gap: .6rem; padding: .6rem; margin-bottom: 8px; background: rgba(255,255,255,0.03); border-radius: 6px; border-left: 3px solid transparent; }
li.completed { opacity: 0.6; border-left-color: #4caf50; }
li.completed .t-title { text-decoration: line-through; color: #999; }
.t-check { width: 1.2rem; height: 1.2rem; margin-top: 2px; cursor: pointer; accent-color: #ffca28; }
.t-content { flex: 1; }
.t-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
.t-title { font-weight: bold; font-size: 1rem; }
.t-desc { font-size: 0.85rem; color: #ccc; white-space: pre-wrap; margin-top: 4px; line-height: 1.4;}
.t-meta { font-size: 0.75rem; color: #aaa; margin-top: 6px; display: flex; gap: 10px; flex-wrap: wrap;}
.tag-badge { background: rgba(255, 202, 40, 0.2); color: #ffca28; padding: 1px 5px; border-radius: 3px; }
.action-btn { background: transparent; border: none; cursor: pointer; font-size: 1rem; opacity: 0.5; transition: 0.2s; color: white; }
.action-btn:hover { opacity: 1; transform: scale(1.2); }

/* ---------- Модальные окна ---------- */
.modal { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
.modal.hidden { display: none; }
.modal-content { max-width: 500px; width: 90%; position: relative; max-height: 90vh; overflow-y: auto; }
.close { position: absolute; top: 10px; right: 15px; font-size: 1.8rem; cursor: pointer; color: #aaa; }
.close:hover { color: white; }
label { display: block; margin-top: 12px; margin-bottom: 4px; font-size: 0.9rem; color: #bbb; }
input, select, textarea { width: 100%; padding: 10px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15); color: white; border-radius: 6px; font-size: 1rem; }
input:focus, textarea:focus, select:focus { outline: none; border-color: #ffca28; }
.form-row { display: flex; gap: 15px; }
.full-w { width: 100%; margin-top: 20px; padding: 12px; font-size: 1rem; }

/* ---------- Сетка выбора дней месяца ---------- */
.custom-days-grid-wrapper { margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px; }
.custom-days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
    margin-top: 8px;
}
.day-checkbox { display: none; }
.day-label {
    display: flex; align-items: center; justify-content: center;
    width: 100%; aspect-ratio: 1;
    background: rgba(255,255,255,0.08);
    border-radius: 50%; cursor: pointer; font-size: 0.8rem;
    transition: all 0.2s ease; user-select: none;
}
.day-checkbox:checked + .day-label {
    background: #ffca28; color: #000; font-weight: bold;
    box-shadow: 0 0 8px rgba(255, 202, 40, 0.5);
}
.day-label:hover { background: rgba(255,255,255,0.2); }

footer { text-align: center; margin: 2rem; font-size: 0.8rem; opacity: 0.5; }


