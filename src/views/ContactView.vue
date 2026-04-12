<script setup>
import { ref } from "vue";
import PageHero from "../components/PageHero.vue";
import { useScrollReveal } from "../composables/useAnimations.js";
useScrollReveal();

const form = ref({ name: "", email: "", subject: "", message: "" });
const submitting = ref(false);
const sent = ref(false);
const error = ref("");

async function submitForm() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert("Please fill in all required fields.");
    return;
  }

  submitting.value = true;
  error.value = "";

  try {
    const response = await fetch("https://formspree.io/f/mgorwpak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      })
    });

    if (response.ok) {
      sent.value = true;
      form.value = { name: "", email: "", subject: "", message: "" };
    } else {
      const data = await response.json();
      error.value = data?.errors?.[0]?.message || "Something went wrong. Try again.";
    }
  } catch (e) {
    error.value = "Network error. Please check your connection.";
  } finally {
    submitting.value = false;
  }
}

const contactInfo = [
  { icon: "📸", title: "Instagram", value: "@sundarbanshouse.official" },
  { icon: "💼", title: "LinkedIn", value: "linkedin.com/company/sundarbans-iitm" },
  { icon: "▶️", title: "Youtube", value: "https://www.youtube.com/channel/UC8pGrF1iAbj7MXNSf7AlqFg" },
];
</script>
