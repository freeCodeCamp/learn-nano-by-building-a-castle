# Learn Nano by Building a Questionnaire

> Welcome to the Nano lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### HINTS

- Capitalization matters
- Make sure you are in the `project` folder when you enter the command
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. Touch `questions.sh`

### 20.1

Use `touch` to create a file named `questions.sh` in the `project` folder.

#### HINTS

- Use the touch command to create the file
- Make sure you are in the `project` folder when you enter the command
- Try entering touch `countdown.sh` in the terminal
- Enter `cd ~/project` to get to the project folder if you aren't there

## 30. Nano `questions.sh`

### 30.1

Nano is a program that runs in the terminal for editing files. You can open a file with `nano filename`. Open the `questions.sh` file you created with Nano.

#### HINTS

- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- You can exit nano by pressing `control+x` if you opened the wrong file

## 40. Write out `questions.sh`

### 40.1

The terminal is showing your file in Nano. At the bottom are the commands for using within Nano. Your file is empty right now. Add `echo hello nano` at the top and press `control+o` to "write-out", or save, the file. You will be prompted at the bottom for the filename to save it as. Leave it as `questions.sh` and press enter to save the file.

#### HINTS

- Put `echo hello nano` at the top of the file, press `control+o` and enter to save the file.

## 50. Exit

### 50.1

Exit Nano by pressing `control+x`.

#### HINTS

- Use `control+x` to exit nano
- Make sure you are in the `questions.sh` file before you exit
- Open the file with `nano questions.sh` if you need to open it first

## 60. Run `countdown.sh`

### 60.1

The `.sh` extensions on your file means it can run in the terminal as if you entered the commands right in there. You can run a `.sh` file with `bash filename`. Run your `questions.sh` file in the terminal.

#### HINTS

- Type `bash questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 70. Nano `questions.sh`

### 70.1

Open your file again with nano.

#### HINTS

- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 80. Add `What's your name`

### 80.1

Add a line below the current one that says, `echo "What's your name?"`. Note that I put double quotes around the text this time. When you are done save the file with the "write-out" hotkeys. Don't change the filename.

#### HINTS

- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name

## 90. Exit Nano

### 90.1

Use the keyboard command to exit nano.

#### HINTS

- Use `control+x` to exit nano
- Make sure you are in the `questions.sh` file before you exit
- Open the file with `nano questions.sh` if you need to open it first

## 100. Run `questions.sh`

### 100.1

Run the file again from the terminal. 

#### HINTS

- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 110. nano `questions.sh`

### 110.1

Now you get two lines :smile: `echo` will put a new line after the text it outputs. Open your script file again with nano.

#### HINTS

- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 120. Remove `echo hello nano`

### 120.1

The commands at the bottom that start with `^` mean you press `control` and whatever the letter is to perform the action. You can cut or remove a line with `control+k`. Remove the `echo hello nano` line from your file and save it.

#### HINTS

- Use the arrows to move the cursor to the `echo hello nano` line and press `control+k`
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name

## 130. Add `read NAME`

### 130.1

You can add `read` into your bash script and it will read whatever you give it. Add `read NAME` after your question and save your file. This will let the user input their name and save it to that variable.

#### HINTS

- Use the arrows to move the cursor to the `echo hello nano` line and press `control+k`
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name

## 140. Exit Nano

### 140.1

Exit nano so you can see what I mean.

#### HINTS

- Use `control+x` to exit nano
- Make sure you are in the `questions.sh` file before you exit
- Open the file with `nano questions.sh` if you need to open it first

## 150. Run `questions.sh`

### 150.1

Run the file again from the terminal. Enter your name when it asks and press enter.

#### HINTS

- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 160. Nano `questions.sh`

### 160.1

Open the file back up so we can add some more to it.

#### HINTS

- Use `nano` to open up your file
- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 170. Nano `questions.sh`

### 170.1

The users input will be stored in the `NAME` variable. You can use the variable by putting a `$` in front of it. Add `echo "Hello, $NAME"` at the bottom of your script so the user will get a nice greeting. Save your file when you're done.

#### HINTS

- Use `nano` to open up your file
- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 180. Exit `questions.sh`

### 180.1

Exit nano so you can test your script.

#### HINTS

- Use `control+x` to exit nano
- Make sure you are in the `questions.sh` file before you exit
- Open the file with `nano questions.sh` if you need to open it first

## 190. Run `questions.sh`

### 190.1

Run the file again from the terminal. Enter your name when it asks and press enter.

#### HINTS

- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 200. Nano `questions.sh`

### 200.1

Now you get a nice greeting after you enter your name :smile: Open the file again with nano.

#### HINTS

- Use `nano` to open up your file
- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 210. Ask favorite food

### 210.1

`echo` the question `"What's your favorite food?"` at the bottom of your script and save the file.

#### HINTS

- Use `nano` to open up your file
- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 220. Run `questions.sh`

### 220.1

Instead of exiting and opening nano over and over, you can split the terminal by clicking the "hamburger" menu at the top left of the screen, navigating to the "Terminal" menu, and clicking "Split Terminal". Split the terminal and run your script in the new terminal.

#### HINTS

- Use `nano` to open up your file
- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 230. Add `read FOOD`

### 230.1

Back in the nano terminal, add lines to the bottom of your script to **read** the user input into a variable named `FOOD`. When you are done, save the file.

#### HINTS

- Use `nano` to open up your file
- Type `nano questions.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

