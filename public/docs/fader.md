# 🎛️ Behringer X32 – Tap Points (punkty poboru sygnału)

## 🧠 Co to jest „Tap Point”?

Tap Point (punkt poboru sygnału) określa **na którym etapie przetwarzania kanału** dźwięk jest wysyłany do:

- BUS-ów (miksów)
- Matrixów
- Efektów (FX)
- Card (USB)

Możesz zdecydować, czy sygnał ma być „czysty”, czy już z EQ, kompresją, itd.

---

## 📋 Lista dostępnych tap pointów w X32:

| Tap Point       | Co zawiera?                              | Kiedy używać? |
|------------------|------------------------------------------|----------------|
| **Pre EQ**        | Tylko gain. Bez EQ, kompresji, bramki.   | Czyste nagrania do miksu później |
| **Post EQ**       | Gain + EQ                                | Gdy chcesz mieć barwę, ale bez kompresji |
| **Pre Fader**     | Gain + EQ + bramka + kompresor           | Standard dla odsłuchów i transmisji |
| **Post Fader**    | Wszystko powyżej + poziom fadera         | Gdy poziom miksu ma być zależny od głośności |
| **Subgroup**      | Specjalne zastosowania grup kanałów      | Rzadko używane, zaawansowane miksowanie grup |
| **Pre Mute**      | Wszystko oprócz MUTE                     | Gdy chcesz wysyłać sygnał mimo mutowania kanału |
| **Post Mute**     | Wszystko włącznie z mute (czyli 0 sygnału, jeśli mute) | Gdy chcesz mieć pełną kontrolę, także nad ciszą |

---

## 🔍 Szczegóły wybranych tap pointów

### 🔵 Pre EQ
- Sygnał jest **czysty**, jak z mikrofonu
- Nie zawiera EQ, kompresji ani bramki
- Idealny do **archiwalnych nagrań** w surowej postaci

### 🔵 Post EQ
- Zawiera tylko EQ, ale bez kompresora
- Używane, jeśli chcesz uchwycić kształt barwy, ale bez „dynamiki”

### 🟢 Pre Fader
- Zawiera EQ, bramkę, kompresor – ale **nie zależy od fadera**
- Główna opcja dla:
    - **odsłuchów dla muzyków**
    - **transmisji**, gdzie poziom ma być niezależny od sali

### 🔴 Post Fader
- Wszystko, co słychać na kanale, **łącznie z głośnością fadera**
- Główna opcja dla:
    - **pogłosów i efektów** – bo reverb powinien znikać razem z wokalem
    - **Matrixów**, jeśli chcesz gotowy miks

### ⚠️ Pre Mute / Post Mute
- Użyteczne, jeśli chcesz mieć np. mute tylko na sali, ale nie na transmisji

---

## 🎯 Co wybrać?

| Zastosowanie           | Rekomendowany tap point |
|------------------------|-------------------------|
| 🎧 Odsłuch dla muzyka   | **Pre Fader**           |
| 📡 Transmisja na żywo  | **Pre Fader** (lub Post jeśli miks z LR) |
| 💽 Nagrania surowe      | **Pre EQ**              |
| 🌫️ Pogłosy (FX sends)  | **Post Fader**          |
| 🎚️ Matrix z BUS-ów     | **Post Fader**          |
| 🔇 Chcesz wyciszyć tylko LR, ale nie transmisję | **Pre Mute** lub **Pre Fader** |

---

## 📌 Gdzie się to ustawia?

1. Naciśnij **SELECT** na kanale docelowym (np. Matrix, BUS)
2. Wejdź w zakładkę **SENDS**
3. Dla każdego źródła (np. kanał 1) w kolumnie „TAP” wybierz odpowiednią opcję (strzałkami)