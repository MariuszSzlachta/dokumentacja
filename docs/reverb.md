# 🌌 Reverb – co to jest, jak działa i jak go ustawić?

## 🧠 Co to jest Reverb?

**Reverb (pogłos)** to efekt, który imituje naturalne odbicia dźwięku w przestrzeni.  
Dzięki niemu dźwięk **nie brzmi płasko ani sucho**, ale jakby był w sali, kościele, hali...

> 🔊 Dźwięk z linii (np. z miksera) bez reverbu brzmi „w głowie” – bez oddechu, bez sceny.

---

## ⚙️ Najważniejsze parametry reverbu

| Parametr         | Co robi | Typowe wartości | Co się stanie, gdy... |
|------------------|---------|------------------|------------------------|
| **Pre-delay**     | Opóźnienie przed pogłosem | 20–60 ms | 🧠 Większe = bardziej oddziela pogłos od źródła |
| **Decay (Time)**  | Czas wybrzmiewania | 1.2–2.5 s | 🌫️ Większe = dłuższy ogon pogłosu |
| **Size / Room**   | Rozmiar przestrzeni | Mały / Średni / Duży | 🏛️ Duży = jak hala, 🎙️ mały = jak studio |
| **Damping**       | Tłumienie wysokich częstotliwości | Średnie | 🌧️ Im więcej = mniej metaliczny dźwięk |
| **Mix / Level**   | Ile efektu dodajesz | 5%–30% | 🔊 Więcej = więcej przestrzeni, ale może zalać miks |

---

## 🎤 Reverb na wokalu

- **Cel:** naturalna głębia, scena, ale bez „mydła”
- **Typ reverbu:** Plate / Medium Room / Hall
- **Parametry:**
    - Pre-delay: **40–60 ms**
    - Decay: **1.5–2.2 s**
    - Damping: **średnie**
    - Mix: **10–20% (na sali), 25–30% (na transmisji)**

> 🧠 Pre-delay oddziela sygnał od pogłosu → dzięki temu wokal nie traci klarowności!

---

## 🎸 Reverb na gitarze prowadzącej

- **Cel:** subtelna przestrzeń, bez zlewania
- **Typ reverbu:** Room / Plate
- **Parametry:**
    - Pre-delay: **20–30 ms**
    - Decay: **1.2–1.8 s**
    - Mix: **5–15%**

> ⚠️ Gitara zbyt „mokra” może brzmieć sztucznie i zlewać się z pianem

---

## 📡 Reverb dla transmisji – jak zbudować scenę?

🎯 Problem: transmisja z miksera brzmi **płasko i zbyt blisko**.  
🎧 Reverb w transmisji **tworzy wrażenie przestrzeni** – słuchacz czuje, że zespół gra „przed nim”.

**Zrób tak:**

1. W X32: użyj osobnego FX (np. `FX4`) tylko dla transmisji
2. Wysyłka: z BUS 1–2 (transmisyjny) → `FX4 Send`
3. Wróć do Matrix 3/4 tylko sygnałem `FX4 Return` (nie dawaj do LR!)

**Ustawienia FX4:**
- Typ: **Hall** lub **Large Room**
- Pre-delay: **40 ms**
- Decay: **2.5–3.5 s**
- Mix: **30–50%** (dużo!)
- EQ: obetnij <150 Hz i >8 kHz, by nie dudniło i nie syczało

> ✅ Zrób test: sam wokal z pogłosem. Zabrzmi „jak w sali”, a nie „jak z kabla”.

---

## 📦 Reverb – kiedy NIE używać?

❌ Jeśli salka jest mocno odbijająca (dużo naturalnego reverbu)  
❌ Na instrumentach rytmicznych (np. cajon) – mogą się zlewać  
❌ Jeśli na transmisji masz już pogłos z pomieszczenia (np. mikrofon ambient)

---

## 🧪 TIPY:

- Reverb **wrzucaj na BUS / FX send**, nie bezpośrednio na kanał
- Ustaw osobny `FX` dla sali i osobny dla transmisji!
- W X32: `FX1–2` daj na salę, `FX3–4` zostaw na YouTube
- Nie używaj pogłosu jako „głośności” – to nie booster!

---

## 🎯 Podsumowanie:

| Zastosowanie | Pre-delay | Decay | Mix | Uwagi |
|--------------|-----------|-------|-----|-------|
| 🎤 Wokal sala | 40 ms     | 1.8 s | 15% | Klarowność i głębia |
| 🎤 Wokal YT   | 50 ms     | 3.0 s | 30% | Scena, oddech |
| 🎸 Gitara     | 20 ms     | 1.5 s | 10% | Lekko, przestrzennie |
| 🌐 Transmisja całości | 50 ms | 3.5 s | 40% | Tylko do Matrix/Bus |

---

