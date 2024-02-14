const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    refresh();
});

async function refresh() {
    const result = await fetch("https://random.dog/woof.json");
    const data = await result.json();

    if (data.url.includes(".mp4") || data.url.includes(".webm")) {
        refresh();
    }

    document.querySelector("img").src = data.url;
}