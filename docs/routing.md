## 🔧 KROK PO KROKU: konfiguracja dla 1 mikrofonu

### 🎤 1. MIKROFON (np. kanał 1)

- Włóż mikrofon do wejścia **XLR 1**
- Na kanale 1 kliknij **SELECT**
- Ustaw **gain** w zakładce *Config / Preamp* (np. 30–40 dB)
- Sprawdź w *Meters*, czy jest sygnał

---

### 🔊 2. Wysyłka na **LR (kaplica)**

- Nadal na kanale 1:
    - Przejdź do zakładki **HOME → Main**
    - Upewnij się, że przycisk **LR** jest **WŁĄCZONY (zapalony)**  
      👉 to wysyła sygnał na główne głośniki (OUT 15 i 16)

---

### 📡 3. Wysyłka na **BUS 1 i BUS 2 (transmisja)**

- Na kanale 1 → zakładka **SENDS**
- Znajdź **BUS 1** i **BUS 2**
    - Ustaw suwaki np. na **0 dB**
    - Tap point: **post-fader** (lub pre-fader – później wyjaśnię różnicę)

---

### 🔀 4. BUS 1/2 → MATRIX 3/4

- Kliknij **Select** na **Matrix 3**
- Zakładka **SENDS**
    - Znajdź **BUS 1**
    - Suwak na **0 dB**
    - Tap point: **Post-Fader**

- Kliknij **Select** na **Matrix 4**
    - Znajdź **BUS 2**
    - Suwak na **0 dB**
    - Tap point: **Post-Fader**

✅ Teraz Matrix 3 = lewa, Matrix 4 = prawa transmisja

---

### 💽 5. Routing Matrix 3/4 → komputer (OBS)

- Wejdź w **Routing > User Out**
    - Slot 15 → **Matrix 3**
    - Slot 16 → **Matrix 4**

- Wejdź w **Routing > Card Out**
    - Wybierz: **Card Out 13–16 = User Out 13–16**

✅ Teraz kanały 15 i 16 w komputerze (OBS) dostają dźwięk transmisji

---

## ✅ Gotowe! Co gdzie idzie?

| Tor               | Co dostaje                                      |
|------------------|--------------------------------------------------|
| **Kaplica (LR)** | Mikrofon z kanału 1 (np. przez OUT 15–16)        |
| **Transmisja (OBS)** | Ten sam mikrofon, ale przez BUS 1/2 → Matrix 3/4 → USB 15/16 |

---

## 💡 Jak to sprawdzić?

1. Mów do mikrofonu
2. Zobacz, czy suwak kanału 1 daje sygnał na:
    - **LR meters**
    - **BUS 1/2 meters**
    - **Matrix 3/4 meters**
3. Na komputerze (np. OBS) sprawdź sygnał na kanałach 15/16

---

## 🔄 Co dalej?

- Chcesz dodać pogłos tylko do transmisji? Mogę pokazać.
- Chcesz więcej kanałów (np. cajon, gitara)? Rozszerzamy miks.
- Chcesz zrozumieć pre/post fader? Już czeka w głowie. 😎

Chcesz teraz dodać **efekt tylko na transmisję**?