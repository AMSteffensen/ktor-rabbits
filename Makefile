.PHONY: backend frontend install start build clean

install:
	chmod +x gradlew
	cd src/frontend && npm install

build:
	./gradlew build
	cd src/frontend && npm run build

backend:
	./gradlew run

frontend:
	cd src/frontend && npm start

start:
	make -j2 backend frontend

clean:
	./gradlew clean
	cd src/frontend && npm run clean