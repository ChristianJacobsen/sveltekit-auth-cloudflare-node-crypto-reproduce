<script lang="ts">
    import { SignIn, SignOut } from "@auth/sveltekit/components";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

{#if data.user}
    <SignOut>
        <div slot="submitButton">Sign Out</div>
    </SignOut>
{:else}
    <SignIn>
        <div slot="submitButton">Sign In</div>
    </SignIn>
{/if}
