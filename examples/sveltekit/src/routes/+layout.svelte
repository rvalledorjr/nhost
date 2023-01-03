<script>
  import '../app.css';
</script>

<header class="w-full p-4">
  <nav>
    <ul class="list-none grid grid-flow-col justify-start gap-2">
      <li>
        <a href="/">Home</a>
      </li>

      <li>
        <a href="/settings/general">Settings</a>
      </li>
    </ul>
  </nav>
</header>

<slot />
