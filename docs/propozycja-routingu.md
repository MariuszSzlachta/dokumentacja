# ⚙️ Konfiguracja routingu miksera X32
*wersja z transmisją, odsłuchem, subwooferem i korytarzami*

## 🎯 Cel
Stworzenie przejrzystej, elastycznej i czytelnej konfiguracji dla transmisji online, odsłuchów scenicznych i personalnych, subwoofera oraz głośników na korytarzach.

---

## 🔹 BUSy i ich funkcje

| BUS | Zastosowanie             | Uwaga                    |
|-----|--------------------------|--------------------------|
| 1   | Transmisja L             | NIE wysyłany na XLR      |
| 2   | Transmisja R             | NIE wysyłany na XLR      |
| 3   | Odsłuch sceniczny wokal  | XLR Out                  |
| 4   | Odsłuch sceniczny chórek | XLR Out                  |
| 5   | Cajon (słuchawki)        | XLR Out                  |
| 6   | Piano (słuchawki)        | XLR Out                  |
| 7   | Bas (słuchawki)          | XLR Out                  |
| 8   | Subwoofer mono           | XLR Out, tylko dla basu  |

---

## 🛊 Matrixy

| Matrix | Zastosowanie         | Uwagi                    |
|--------|----------------------|--------------------------|
| 1      | Transmisja L         | Wysyłany na CARD Out 1   |
| 2      | Transmisja R         | Wysyłany na CARD Out 2   |
| 3      | Głośnik korytarz L   | Wysyłany na XLR          |
| 4      | Głośnik korytarz P   | Wysyłany na XLR          |

---

## 📡 Routing > Out 1–16

| Slot | Co przypisujemy | Cel                      |
|------|------------------|--------------------------|
| 1    | Mixbus 3         | Odsłuch sceniczny wokal  |
| 2    | Mixbus 4         | Odsłuch sceniczny chórek |
| 3    | Mixbus 5         | Cajon (słuchawki)        |
| 4    | Mixbus 6         | Piano (słuchawki)        |
| 5    | Mixbus 7         | Bas (słuchawki)          |
| 6    | Mixbus 8         | Subwoofer                |
| 7    | Matrix 3         | Głośnik korytarz L       |
| 8    | Matrix 4         | Głośnik korytarz P       |
| 15   | Main L           | Głośnik kaplica L        |
| 16   | Main R           | Głośnik kaplica P        |

📌 *Pozostałe sloty (9–14) można zostawić jako `---` lub FX return.*

---

## 🔠 Routing > XLR Out

| XLR Out | Przypisanie ze slotu  |
|---------|------------------------|
| 1       | Out 1 (BUS 3)          |
| 2       | Out 2 (BUS 4)          |
| 3       | Out 3 (BUS 5)          |
| 4       | Out 4 (BUS 6)          |
| 5       | Out 5 (BUS 7)          |
| 6       | Out 6 (BUS 8)          |
| 7       | Out 7 (Matrix 3)       |
| 8       | Out 8 (Matrix 4)       |
| 15      | Out 15 (Main L)        |
| 16      | Out 16 (Main R)        |

---

## 📱 Routing > CARD (USB)

### 1. Routing > User Out 1–8

| User Out | Co przypisujemy |
|----------|------------------|
| 1        | Matrix 1         |
| 2        | Matrix 2         |
| 3–8      | `---` lub FX / rezerwa |

### 2. Routing > CARD

- `Card Out 1–8` → **User Out 1–8** *(czyli tylko Matrix 1 i 2)*
- `Card Out 9–32` → `---` *(lub pozostawić puste)*

---

## 🚀 Efekt końcowy

Z komputera (OBS, DAW) widzisz tylko **2 ścieżki transmisji** z Matrixów 1 i 2 – czysty i bezpieczny sygnał.  
Zero pętli, zero przypadkowych powrotów AUXa, wszystko jasne i logiczne ✅