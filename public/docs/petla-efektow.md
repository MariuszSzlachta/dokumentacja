# 🔁 Pętla efektów (FX Loop) – co to jest i jak to działa?

## 🧠 Co to jest FX loop?

Pętla efektów to **tor wysyłkowo-zwrotny**.  
Dźwięk wychodzi z kanału → trafia do efektu (np. pogłos) → wraca do miksu.

> 🔊 Myślisz: "Wyślij coś na pogłos i wróć z tym do miksu"

---

## 🔧 Dwie części pętli:

| Nazwa        | Co robi                     | Na X32 odpowiada za…      |
|--------------|-----------------------------|----------------------------|
| **Send**     | Wysyła sygnał **z kanału** do efektu | `FX Send` = wejście do efektu |
| **Return**   | Zwraca sygnał **z efektu** do miksu  | `FX Return` = wyjście z efektu |

---

## 📈 Przepływ sygnału w pętli efektów (FX Loop)

```text
+----------------+
| 🎤 Mikrofon     |
+----------------+
        ↓
+-------------------------+
| Kanał wejściowy (CH 1)  |
+-------------------------+
        ↓
+-----------------------------+
| FX SEND (np. FX1 Send Bus)  |
+-----------------------------+
        ↓
+----------------------------------+
| Procesor efektów (np. Reverb FX1)|
+----------------------------------+
        ↓
+-----------------------------+
| FX RETURN (FX1 Return kanał)|
+-----------------------------+
        ↓
+--------------------------+
| Suma LR / Bus / Matrix   |
+--------------------------+
```
---

## 🧰 Jak ustawić efekt na mikrofon – krok po kroku (X32)

### ✅ Sposób 1: SELECT na **mikrofonie**

1. **Wciśnij SELECT** na kanale mikrofonu (np. `CH 1`)
2. Wciśnij przycisk `SENDS ON FADER`
3. Wybierz bank FX (`Bus 13–16` = FX1–FX4 na X32)
4. Ustaw suwakiem, **ile chcesz wysłać** do danego efektu (np. FX1 = pogłos)
5. Wciśnij `SENDS ON FADER` ponownie, aby wrócić

> 🔁 Teraz mikrofon trafia na efekt! Ale jeszcze nie słyszysz pogłosu…

6. **Wciśnij SELECT na FX1 Return**
7. Przejdź do zakładki `MIX BUS` → włącz `LR` i ustaw poziom (faderem)
8. Gotowe – pogłos wraca do miksu!

---

### ✅ Sposób 2: SELECT na **efekcie (FX Return)**

1. **Wciśnij SELECT na FX1 Return**
2. Wciśnij `SENDS ON FADER`
3. Teraz faderami regulujesz, **ile efektu wraca do sumy LR lub BUS**

> 🔊 Przydatne, jeśli masz kilka efektów i chcesz kontrolować „ile wraca”

---

## 🧪 FAQ – pytania praktyczne

### 🔹 Czy mogę dać efekt tylko na transmisję?

Tak!
- W `FX RETURN` **odznacz LR**, a włącz tylko `Bus 1/2` (transmisyjny)
- Dzięki temu efekt nie gra na sali – tylko w streamie

---

### 🔹 Czy mogę użyć kilku efektów jednocześnie?

Tak!
- FX1: pogłos na wokal
- FX2: delay na gitarę
- FX3: przestrzeń dla transmisji
- FX4: eksperymenty

Wysyłasz z kanału do różnych FX, a każdy FX Return miksujesz osobno.

---

### 🔹 Jak sprawdzić, który efekt działa?

1. Wciśnij `SELECT` na FX Return (np. FX1)
2. Przejdź do `HOME > FX`
3. Widzisz: typ efektu, parametry, poziom sygnału

---

## ✅ W skrócie

- **SEND** = ile z kanału wysyłasz na efekt
- **RETURN** = ile z efektu wraca do miksu
- `SENDS ON FADER` to narzędzie do ustawiania SENDów
- FX Return możesz wysłać do **LR, BUS lub Matrix**, w zależności gdzie chcesz słyszeć efekt

---

