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
            <h1>Post for need student</h1>
            <form id="signup" method="post" action="Teacher_post.php">
                <div class="user">
                    <label for="teacher-id">Teacher Id:</label><br>
                    <input type="number" name="teacher-id" id="teacher-id" placeholder="teacher-id" required>
                </div>

                <div class="user">
                    <label for="name">Full Name:</label><br>
                    <input type="text" name="name" id="name" placeholder="Name" required>
                </div>

                <div class="user">
                    <label for="experience">Experience:</label><br>
                    <textarea type="text" name="experience" id="experience" placeholder="Tuition experience" required></textarea>
                </div>

                <div class="user">
                    <label for="qualification">Qualification:</label><br>
                    <textarea type="text" name="qualification" id="qualification" placeholder="Your qualification" required></textarea>
                </div>

                <div class="user">
                    <label for="fee">Fee:</label><br>
                    <input type="text" name="fee" id="fee" placeholder="Monthly fee" required>
                </div>

                <div class="user">
                    <label for="interested-subject">Interested Subject:</label><br>
                    <textarea type="text" name="interested-subject" id="interested-subject" placeholder="Interested subjects" required></textarea>
                </div>

                <div class="user">
                    <label for="location">Location:</label><br>
                    <input type="text" name="location" id="location" placeholder="location" required>
                </div>

                <div class="user">
                    <div>
                        <label for="teaching-style">Teaching style:</label>
                        <select id="teaching-style" name="teaching-style">
                            <option>Single</option>
                            <option>Group</option>
                        </select>
                    </div>
                </div>

                <div class="user">
                    <label for="availability">Availability:</label><br>
                    <input type="text" name="availability" id="availability" placeholder="availability" required>
                </div>

                <div class="user">
                    <label for="contact">Contact:</label><br>
                    <input type="text" name="contact" id="contact" placeholder="contact" required>
                </div>

                <div class="button">
                    <button id="signup-button" name="signUp">Submit</button>
                </div>
            </form>

        </section>
    </main>
</body>

</html>