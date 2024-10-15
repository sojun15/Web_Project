<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main>
        <section class="container">
            <h1>Tuition Post</h1>
            <form id="signup" method="post" action="register.php">
                <div class="user">
                    <label for="userid">UserId:</label><br>
                    <input type="number" name="userid" id="userid" placeholder="User ID" required>
                </div>

                <div class="user">
                    <label for="name">Full Name:</label><br>
                    <input type="text" name="name" id="name" placeholder="Name" required>
                </div>

                <div class="user">
                    <label for="experience">Experience & Qualification:</label><br>
                    <textarea type="text" name="experience" id="experience" placeholder="experience & qualification" required></textarea>
                </div>

                <div class="user">
                    <label for="fee">Fee:</label><br>
                    <input type="text" name="fee" id="fee" placeholder="fee" required>
                </div>

                <div class="user">
                    <label for="subject">Interested Subject:</label><br>
                    <textarea type="text" name="subject" id="subject" placeholder="subject" required></textarea>
                </div>

                <div class="user">
                    <label for="location">location:</label><br>
                    <input type="text" name="location" id="location" placeholder="location" required>
                </div>

                <div class="user">
                    <label for="method">Teaching Type:</label>
                    <select id="method" name="method">
                        <option>Online</option>
                        <option>In-person</option>
                        <option>Group</option>
                        <option>Individual</option>
                    </select>
                </div>

                <div class="user">
                    <label for="availability">Availability:</label><br>
                    <input type="text" name="availability" id="availability" placeholder="availability" required>
                </div>

                <div class="user">
                    <label for="contact">contact:</label><br>
                    <input type="text" name="contact" id="contact" placeholder="contact" required>
                </div>

                <div class="user">
                    <label for="notes">notes:</label><br>
                    <textarea type="text" name="notes" id="notes" placeholder="notes" required></textarea>
                </div>

                <div class="button">
                    <button id="signup-button" name="signUp">Submit</button>
                </div>
            </form>

            <script src="server.js"></script>
        </section>
    </main>
</body>

</html>