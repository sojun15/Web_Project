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
            <form id="signup" method="post" action="Post.php">
                <div class="user">
                    <label for="student-id">Student Id:</label><br>
                    <input type="number" name="student-id" id="student-id" placeholder="Student ID" required>
                </div>

                <div class="user">
                    <label for="student-name">Full Name:</label><br>
                    <input type="text" name="student-name" id="student-name" placeholder="Name" required>
                </div>

                <div class="user">
                    <label for="prefered-subject">Interested subjects:</label><br>
                    <textarea type="text" name="prefered-subject" id="prefered-subject" placeholder="prefered-subject" required></textarea>
                </div>

                <div class="user">
                    <label for="location">Location:</label><br>
                    <input type="text" name="location" id="location" placeholder="location" required>
                </div>

                <div class="user">
                    <label for="availability">Availity:</label><br>
                    <input type="text" name="availability" id="availability" placeholder="availability" required>
                </div>

                <div class="user">
                    <label for="learning-goal">Learning goal:</label><br>
                    <textarea type="text" name="learning-goal" id="learning-goal" placeholder="learning-goal"></textarea>
                </div>

                <div class="user">
                    <label for="maximum-budget">Tuition Fee:</label><br>
                    <input type="text" name="maximum-budget" id="maximum-budget" placeholder="maximum-budget" required>
                </div>

                <div class="user">
                    <label for="teaching-style">Teaching Type:</label>
                    <select id="teaching-style" name="teaching-style">
                        <option>Single</option>
                        <option>Group</option>
                    </select>
                </div>

                <div class="user">
                    <label for="contact-details">contact-details:</label><br>
                    <input type="text" name="contact-details" id="contact-details" placeholder="contact-details" required>
                </div>

                <div class="user">
                    <label for="additional">additional:</label><br>
                    <input type="text" name="additional" id="additional" placeholder="additional" required>
                </div>


                <div class="button">
                    <button id="signup-button" name="signUp">Submit</button>
                </div>
            </form>

        </section>
    </main>
</body>

</html>