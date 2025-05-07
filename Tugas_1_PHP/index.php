<!DOCTYPE html>
<html>
<head>
    <title>Form Nilai Ujian</title>
</head>
<body>
    <h2>Form Nilai Ujian</h2>
    <form action="" method="post">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Nilai Ujian:</label><br>
        <input type="number" name="nilai" required><br><br>

        <input type="submit" name="submit" value="Kirim">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        echo "<h3>Hasil:</h3>";
        echo "Nama: $nama <br>";
        echo "Email: $email <br>";
        echo "Nilai Ujian: $nilai <br>";

        if ($nilai > 70) {
            echo "<strong>Status: Lulus</strong>";
        } else {
            echo "<strong>Status: Remedial</strong>";
        }
    }
    ?>
</body>
</html>