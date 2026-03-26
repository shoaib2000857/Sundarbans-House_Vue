<template>
  <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem;background:var(--bg)">
    <div style="width:100%;max-width:440px">
      <div style="text-align:center;margin-bottom:2rem">
        <img src="../assets/LOGO.JPEG" alt="Sundarbans" style="width:72px;height:72px;border-radius:50%;border:2px solid var(--accent);margin-bottom:1rem;display:block;margin-left:auto;margin-right:auto" />
        <div class="section-tag" style="display:inline-flex;margin-bottom:0.75rem">Members Area</div>
        <h1 style="font-family:Cinzel,serif;font-size:1.8rem;font-weight:700;letter-spacing:0.04em;margin-bottom:0.5rem">Members <span class="tg">Lounge</span></h1>
        <p style="font-size:0.88rem;color:var(--text2)">Sign in to access exclusive resources, dashboards, and member features</p>
      </div>

      <div class="card-base">
        <div v-if="loggedIn" style="text-align:center;padding:1rem 0">
          <div style="font-size:3rem;margin-bottom:1rem">🎉</div>
          <h3 style="font-family:Cinzel,serif;font-weight:700;margin-bottom:0.5rem">Welcome back!</h3>
          <p class="desc">You're signed into the Members Lounge.</p>
          <button @click="loggedIn=false" class="submit-btn" style="margin-top:1.5rem">Sign Out</button>
        </div>
        <template v-else>
          <div class="form-field">
            <label>Email / Student ID</label>
            <input v-model="email" type="email" class="form-input" placeholder="your@email.com" @keyup.enter="login" />
          </div>
          <div class="form-field">
            <label>Password</label>
            <div style="position:relative">
              <input v-model="password" :type="showPass ? 'text' : 'password'" class="form-input" placeholder="••••••••" @keyup.enter="login" style="padding-right:3rem" />
              <button @click="showPass=!showPass" style="position:absolute;right:0.75rem;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--text2);cursor:pointer;font-size:1rem">
                {{ showPass ? '🙈' : '👁' }}
              </button>
            </div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
            <label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer;font-size:0.82rem;color:var(--text2)">
              <input type="checkbox" v-model="remember" style="accent-color:var(--accent)" /> Remember me
            </label>
            <a href="#" style="font-size:0.8rem;color:var(--accent);text-decoration:none">Forgot password?</a>
          </div>
          <button @click="login" class="submit-btn" style="width:100%;justify-content:center" :disabled="logging">
            {{ logging ? 'Signing in...' : 'Sign In →' }}
          </button>
          <div v-if="error" style="margin-top:1rem;padding:0.75rem;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:8px;font-size:0.83rem;color:#ef4444;text-align:center">
            {{ error }}
          </div>
          <div style="text-align:center;margin-top:1.5rem;font-size:0.83rem;color:var(--text2)">
            Not a member? <router-link to="/community" style="color:var(--accent);text-decoration:none">Join Sundarbans →</router-link>
          </div>
        </template>
      </div>

      <div style="text-align:center;margin-top:1.5rem">
        <router-link to="/" style="font-size:0.78rem;color:var(--text3);text-decoration:none">← Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPass = ref(false)
const remember = ref(false)
const logging = ref(false)
const loggedIn = ref(false)
const error = ref('')

function login() {
  if (!email.value || !password.value) { error.value = 'Please enter your email and password.'; return }
  logging.value = true; error.value = ''
  setTimeout(() => {
    logging.value = false
    if (email.value && password.value.length >= 6) { loggedIn.value = true }
    else { error.value = 'Invalid credentials. Please try again.' }
  }, 1200)
}
</script>
