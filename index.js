const fs = require("fs");
const { execSync } = require("child_process");

const runBot = () => {
    console.clear();
    console.log("Memulai bot...");
    try {
        if (fs.existsSync("../node_modules")) {
            console.log("Menggunakan node_modules dari direktori atas...");
            execSync("node MeoMunDep", { stdio: "inherit", cwd: ".." });
        } else {
            console.log("Menggunakan node_modules dari direktori saat ini...");
            execSync("node MeoMunDep", { stdio: "inherit" });
        }
        console.log("Bot selesai dijalankan.");
    } catch (error) {
        console.error("Terjadi kesalahan saat menjalankan bot:", error.message);
    }
};

// Jalankan script bot langsung
runBot();
