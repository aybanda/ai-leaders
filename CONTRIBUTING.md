# Contributing to AI Leaders

Thank you for your interest in contributing to AI Leaders! We're excited to have you join our community and help build the future of AI and WordPress education.

## How to Contribute

We welcome contributions of all types—from fixing typos in the documentation to implementing new features.

### Finding Something to Work On

If you're looking for ways to contribute, please check our [GitHub Issues](https://github.com/1111philo/ai-leaders/issues).

If you have an idea for a new feature or have found a bug that isn't already listed, please [open a new issue](https://github.com/1111philo/ai-leaders/issues/new) to discuss it before starting work.

### Your First Pull Request

There are two primary ways to contribute: the traditional command-line approach and an AI-assisted approach using Google Antigravity.

#### Option 1: AI-Assisted Development (Recommended)

If you have access to [Google Antigravity](https://deepmind.google/technologies/gemini/), you can use it to streamline your contribution process. Antigravity can help you understand the codebase, generate tests, and even write the implementation for you.

1. **Open the Project**: Open the repository in your IDE where Antigravity is enabled.
2. **Describe Your Task**: Start a conversation with Antigravity. For example:
   - *"I want to fix issue #123. Can you help me find the relevant files?"*
   - *"I need to add a new 'About' section. Can you generate the component and style it with Tailwind?"*
3. **Review and Iterate**: Review the code Antigravity generates. You can ask for modifications directly in the chat.
4. **Finalize**: Once the changes are ready, you can ask Antigravity to help you create a branch and commit your changes.

#### Option 2: Traditional Workflow (Command Line)

1. **Fork the repository**: Click the "Fork" button at the top right of this page to create your own copy.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/ai-leaders.git
   cd ai-leaders
   ```
3. **Set up the project**:
   ```bash
   npm install
   ```
4. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Make your changes**: Implement your feature or fix.
6. **Commit and Push**:
   ```bash
   git commit -m "Brief description of the change"
   git push origin your-branch-name
   ```

#### Option 3: GitHub Web Interface (No CLI required)

For simple changes like documentation fixes, you can use GitHub's built-in editor:
1. Navigate to the file you want to change.
2. Click the pen icon (**Edit this file**).
3. Make your changes in the editor.
4. Scroll down to **Commit changes**, select "Create a new branch for this commit and start a pull request," and click **Propose changes**.

### Submitting Your PR

Regardless of the method used, once your changes are pushed to your fork:
1. Go to the original [AI Leaders repository](https://github.com/1111philo/ai-leaders).
2. You should see a banner saying "your-branch-name had recent pushes". Click **Compare & pull request**.
3. Describe your changes clearly and link any related issues.

## Development Guidelines

- **Code Quality**: Follow existing code patterns. We use TypeScript and React.
- **Styling**: We use Tailwind CSS for styling.
- **Testing**: Before submitting a PR, ensure the project builds and runs correctly:
  ```bash
  npm run dev
  # and
  npm run build
  ```

## Code of Conduct

Please be respectful and inclusive in all your interactions within the project. We are committed to providing a welcoming environment for everyone.

Thank you again for your contributions!
