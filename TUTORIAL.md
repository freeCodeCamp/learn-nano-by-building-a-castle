# Learn Nano by Building a Castle

> Welcome to the Nano lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### HINTS

- Capitalization matters
- Make sure you are in the `project` folder when you enter the command
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. Touch `castle.sh`

### 20.1

Use `touch` to create a file named `castle.sh` in the `project` folder.

#### HINTS

- Use the touch command to create the file
- Make sure you are in the `project` folder when you enter the command
- Try entering `touch castle.sh` in the terminal
- Enter `cd ~/project` to get to the project folder if you aren't there

## 30. Nano `castle.sh`

### 30.1

Nano is a program that runs in the terminal for editing files. You can open a file in it with `nano filename`. Open the `castle.sh` file you created with Nano.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- You can exit nano by pressing `control+x` if you opened the wrong file

## 40. Write out `castle.sh`

### 40.1

The terminal is showing your file in Nano. At the bottom are the commands for using within Nano. Your file is empty right now. Add `echo hello nano` at the top and press `control+o` to "write-out", or save, the file. You will be prompted at the bottom for the filename to save it as. Leave it as `castle.sh` and press enter to save the file.

#### HINTS

- Put `echo hello nano` at the top of the file, press `control+o` then enter to save the file.

## 50. Exit

### 50.1

Exit Nano by pressing `control+x`.

#### HINTS

- Use `control+x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first

## 60. Run `castle.sh`

### 60.1

The `.sh` extensions on your file means it can run in the terminal as if you entered the commands right in there. You can run a `.sh` file with `bash filename`. Run your `castle.sh` file in the terminal.

#### HINTS

- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 70. Nano `castle.sh`

### 70.1

Open your file again with nano.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 80. Delete `echo hello nano`

### 80.1

You can "cut" text in nano with `control+k`. Move the cursor to the line with your text and remove the whole line. When you are done, save the file. Note the you cannot use a mouse to move your cursor.

#### HINTS

- Remove the `echo hello nano` line of text and save the file
- Do not change the name of the file
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name

## 90. Add bottom row to castle

### 90.1

You are going to draw a castle. Add the bottom row of the castle by putting 20 underscores (`_`) in a row. It should look like this:

```bash
____________________
```

Save the file when you are done.

#### HINTS

- Your file should match the example
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name
- Do not change the name of the file

## 100. Add the bottom row sides

### 100.1

Add a vertical bar, or pipe (`|`), at each end of your bottom row. It should look like this:

```
|____________________|
```

and save the file.

#### HINTS

- Your file should match the example
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name
- Do not change the name of the file

## 110. Add second row

### 110.1

Add a row above your bottom row with two more vertical bars. Each bar should be above your existing bars. It should look like this:

```bash
|                    |
|____________________|
```

When you are done, save the file. 

#### HINTS

- Your file should match the example
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name
- Do not change the name of the file

## 120. Add the sides of the castle

### 120.1

You can use `control+k` to "cut" and `control+u` to "uncut", or paste a line. Add five more rows like you just added to make your castle six stories high. Try to use the cut and paste method. It should look like this:

```bash
|                    |
|                    |
|                    |
|                    |
|                    |
|____________________|
```

When you are done, save the file.

#### HINTS

- Your file should match the example
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name
- Do not change the name of the file

## 130. Add a roof to the castle

### 130.1

The existing top row is going to be the roof of the castle. Make it look like this:

```bash
|  |______________|  |
```

Do not change any of the other rows. When you are done, save the file.

#### HINTS

- Your top row should match the example
- You should not change any other rows
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name
- Do not change the name of the file

## 140. Add the second from top row

### 140.1

The top of the castle has a lookout tower on each end. Add a single row at the top of your castle to make the top look like this:

```bash
/  \              /  \
|  |______________|  |
```

Only add the top row. When are done, save the file.

#### HINTS

- Your top row should match the top row of the example
- The castle should now be eight stories high
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name
- Do not change the name of the file

## 150. Add the peaks

### 150.1

Add the peaks of your lookout towers. Put another row at the top with `/\` above each lookout. It should look like this:

```bash
 /\                /\
/  \              /  \
```

When you are done, save the file.

#### HINTS

- Your top row should match the top row of the example
- The castle should now be nine stories high
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name
- Do not change the name of the file

## 160. Echo your castle

### 160.1

Make your castle print to the command line. Add a row above your castle with `echo "`, put another `"` on a new row below the castle. It should look like this:

```bash
echo "
 /\                /\
/  \              /  \
|  |______________|  |
|                    |
|   []    []    []   |
|                    |
|                    |
|                    |
|____________________|
"
```

When you are done, save the file.

#### HINTS

- Your file should match the example
- Use `control+o` to save the file.
- Press `enter` after `control+o` to save the file without changing the name
- Do not change the name of the file

## 170. Exit nano

### 170.1

Use `control+x` to exit nano.

#### HINTS

- Use `nano` to open up your file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command

## 180. Run `castle.sh`

### 180.1

Run your script with `bash castle.sh`

#### HINTS

- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
