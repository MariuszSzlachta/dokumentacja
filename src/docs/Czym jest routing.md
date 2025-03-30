# 🎛️ Behringer X32 – Routing od podstaw

## 🧠 Co to jest routing?

**Routing** to decydowanie **co trafia gdzie** – czyli które dźwięki (kanały, mixy, efekty) wychodzą na konkretne **wyjścia** miksera, interfejsu, transmisji czy nagrań.

---

## 🔌 OUTPUTS – fizyczne wyjścia dźwięku

**Outputy** to **prawdziwe, fizyczne gniazda** z tyłu miksera, które prowadzą sygnał dalej (np. na głośniki, monitory, rejestrator).

- W X32 masz wyjścia **XLR OUT 1–16**
- Możesz przypisać do nich: LR, BUS-y, Matrixy, FX-y itd.

### 🔧 Przykład:
- OUT 15 = Main L (lewy głośnik kaplicy)
- OUT 16 = Main R (prawy głośnik kaplicy)

---

## 💽 CARD – wyjście na komputer (USB)

**CARD** to karta dźwiękowa (np. X-USB lub X-Live) – czyli **wyjścia audio przez USB** do komputera.

- Działa jak interfejs audio (np. do OBS, Reapera, DAW)
- Masz **32 kanały** do wysyłki na komputer
- W zakładce **Routing > Card Out** decydujesz, **co** ma trafić na które kanały USB

### 🔧 Przykład:
- CARD 15 = Matrix 3 (lewy sygnał do OBS)
- CARD 16 = Matrix 4 (prawy sygnał do OBS)

---

## 🔀 AES50 – połączenia między urządzeniami X32 i stageboxami

**AES50** to cyfrowe połączenie (Ethernet), które służy do komunikacji między X32 a innymi urządzeniami, np.:

- stageboxy (S16, S32)
- drugi mikser X32
- osobny mikser odsłuchowy (np. X32 Rack dla monitorowca)

X32 ma dwa porty AES50: **A i B**

### 🔧 Przykład:
- Z stageboxa S16 przychodzą wejścia kanałów 17–32
- Wysyłasz BUS-y 1–8 na AES50 → idą na odsłuchy

---

## 🧮 Matrix – mikser miksów

**Matrix** to specjalny miks, który **zbiera gotowe sygnały** z:

- Main LR
- BUS-ów
- innych Matrixów

Matrix pozwala dodać osobną kontrolę końcową nad czymś, co już jest zmiksowane.

### 🔧 Przykład:
- BUS 1/2 to miks transmisji
- Matrix 3/4 zbiera BUS 1/2 → daje dodatkowe EQ, limiter i idzie do OBS

---

## 🔧 Routing – podstawowe zakładki

### `Routing > Inputs`
- Tu decydujesz, **skąd kanały wejściowe biorą sygnał**
- Np. XLR 1–8 albo AES50 A1–8

### `Routing > Outputs 1–16`
- Tu przypisujesz **co idzie na fizyczne wyjścia XLR**
- Np. OUT 15 = Main L

### `Routing > Card Out`
- Tu przypisujesz **co idzie na komputer przez USB**
- Np. Card Out 13–16 = Matrix 3/4

### `Routing > AES50 A/B`
- Tu przypisujesz **co idzie do stageboxów lub innych mikserów**
- Np. wysyłanie BUS 1–8 na AES50 A 1–8

---

## ⚙️ User Out – niestandardowe przypisania

**User Out** to zakładka, w której tworzysz **własne przypisanie wyjść**, np. dla:

- Card Out
- AES50
- XLR Out

Masz do dyspozycji 8 slotów w grupie (User Out 1–8, 9–16 itd.)

### 🔧 Przykład:
Chcesz przypisać:

- Slot 15 → Matrix 3
- Slot 16 → Matrix 4

Potem w **Card Out** ustawiasz:  
Card Out 13–16 = **User Out 13–16**

---

## 🧠 Podsumowanie

| Element        | Co to?                            | Gdzie używamy?                        |
|----------------|-----------------------------------|----------------------------------------|
| **Outputs**     | Wyjścia XLR z tyłu miksera        | Głośniki, monitory, wzmacniacze        |
| **Card**        | Wyjścia USB na komputer           | OBS, nagrywanie, transmisja            |
| **AES50**       | Cyfrowe połączenie z innymi X32/S16 | Stagebox, drugi mikser, monitory      |
| **Matrix**      | Miks miksów                       | Transmisje, systemy opóźnione, nagłośnienie dodatkowe |
| **User Out**    | Niestandardowe przypisania wyjść  | Gdy potrzebujesz konkretnego kanału w konkretnym miejscu |