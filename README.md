# CharacterCounter

**CharacterCounter** to aplikacja webowa zbudowana w technologii **React** z użyciem **Vite**, umożliwiająca analizę tekstu w czasie rzeczywistym. Użytkownicy mogą wprowadzać tekst, a aplikacja wyświetla statystyki, takie jak liczba znaków, słów, zdań, czas czytania oraz gęstość liter (z procentowym udziałem każdej litery).

> **Uwaga**: To repozytorium jest kopią oryginalnego repozytorium, które znajduje się na platformie **Bitbucket**. Oryginalne repozytorium zawiera pełną historię commitów i jest głównym źródłem kodu projektu. Skontaktuj się z zespołem deweloperskim, aby uzyskać dostęp.

## Cel aplikacji

Aplikacja **CharacterCounter** pozwala użytkownikom:
- Analizować wprowadzony tekst w czasie rzeczywistym.
- Uzyskać szczegółowe statystyki, w tym:
  - Liczba znaków (z limitem 9999 znaków).
  - Liczba słów.
  - Liczba zdań.
  - Szacowany czas czytania (przy założeniu 200 słów na minutę).
  - Gęstość liter (procentowy udział każdej litery w tekście).
- Wizualizować gęstość liter za pomocą pasków procentowych.

## Główne funkcje

1. **Wprowadzanie tekstu**:
   - Użytkownik wpisuje lub wkleja tekst w polu tekstowym (`textarea`).
   - Limit znaków: 9999.
   - Tekst jest analizowany w czasie rzeczywistym.

2. **Statystyki tekstu**:
   - **Liczba znaków**: Całkowita liczba znaków w tekście.
   - **Liczba słów**: Liczba słów po odfiltrowaniu pustych ciągów.
   - **Liczba zdań**: Liczba zdań na podstawie znaków interpunkcyjnych (`.`, `!`, `?`).
   - **Czas czytania**: Szacowany czas czytania w minutach (200 słów/min).

3. **Gęstość liter**:
   - Wyświetla liczbę wystąpień każdej litery (A-Z, bez uwzględniania znaków specjalnych).
   - Oblicza procentowy udział każdej litery w tekście.
   - Wizualizuje procenty za pomocą dynamicznych pasków.

## Architektura aplikacji

### Frontend
- **Technologie**:
  - **React**: Biblioteka do tworzenia interfejsu użytkownika.
  - **Vite**: Narzędzie buildowe z obsługą HMR (Hot Module Replacement).
  - **ESLint**: Narzędzie do lintowania kodu z podstawowymi regułami.
  - **Prettier**: Formatowanie kodu dla spójności.
  - **Husky + CommitLint**: Automatyzacja sprawdzania commitów i formatowania kodu.
- **Dostępne wtyczki Vite**:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Używa Babel dla Fast Refresh.
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Używa SWC dla Fast Refresh.
- **Rekomendacje dla produkcji**:
  - Użyj **TypeScript** z szablonem [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
  - Włącz reguły lintowania z typami za pomocą [`typescript-eslint`](https://typescript-eslint.io).

## Konfiguracja

1. **Sklonuj repozytorium**:
   ```bash
   git clone https://github.com/Mikolaj1921/CharacterCounter.git
   cd CharacterCounter

## Uwaga: Oryginalne repozytorium z pełną historią commitów znajduje się na Bitbucket. Skontaktuj się z zespołem deweloperskim, aby uzyskać dostęp.

- Zainstaluj zależności:
bash

npm install

- Uruchom aplikację:
bash

npm run dev

- Aplikacja będzie dostępna pod adresem http://localhost:5173 (domyślny port Vite).

- Lintowanie i formatowanie kodu:
Sprawdź kod za pomocą ESLint:
bash

npm run lint

- Sformatuj kod za pomocą Prettier:
bash

npm run format


## Algorytmy i procesy
1. Analiza tekstu
Użytkownik wprowadza tekst w polu textarea.

Stan tekstu (text) jest aktualizowany za pomocą hooka useState.

Obliczane są:
Liczba znaków (text.length).

Liczba słów (po rozdzieleniu tekstu na słowa i odfiltrowaniu pustych ciągów).

Liczba zdań (po rozdzieleniu tekstu na zdania za pomocą /.!?!+/).

Czas czytania (na podstawie 200 słów/min).

2. Gęstość liter
Tekst jest konwertowany na wielkie litery i rozdzielany na pojedyncze znaki.

Dla każdej litery (A-Z) obliczana jest liczba wystąpień.

Obliczany jest procentowy udział każdej litery w całkowitej liczbie liter.

Wyniki są wyświetlane w formie listy z paskami procentowymi.

## Technologie i narzędzia 
## Frontend:
- React

- Vite

- ESLint

- Prettier

- Husky + CommitLint

##Wtyczki Vite:
@vitejs
/plugin-react

@vitejs
/plugin-react-swc

## Opcjonalnie:
TypeScript

typescript-eslint

## Plany rozwoju
- Dodanie wsparcia dla analizy innych znaków (np. cyfr, znaków specjalnych).

- Implementacja eksportu statystyk do pliku (np. CSV, PDF).

- Wprowadzenie motywów UI (jasny/ciemny).

- Rozszerzenie o obsługę różnych języków (lokalizacja).

## Kontakt
W razie pytań skontaktuj się z zespołem deweloperskim:  mikolajmelnyk16@gmail.com

## Informacje o projekcie
Projekt CharacterCounter został stworzony przez użytkownika Mikolaj1921 jako narzędzie do analizy tekstu w czasie rzeczywistym. Kod źródłowy jest dostępny w tym repozytorium, ale pełna historia commitów znajduje się w oryginalnym repozytorium na Bitbucket.(priv)

