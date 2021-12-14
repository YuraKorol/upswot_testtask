<template>
  <form class="form-container" @submit.prevent="login">
    <div class="form-container__main">
      <Input label="Name" name="name" class="form-container__input" @input="takeUsername" />
      <Input
        label="Password"
        type="password"
        name="password"
        class="form-container__input"
        @input="takePassword"
      />
      <Button bg="#0076c0" type="submit">LOGIN</Button>
      <Button style="margin: 5px 0px" color="#0076c0">Forgot Password</Button>
    </div>
    <div class="form-container__footer">
      <Button :font="16" color="#000000">Register now</Button>
    </div>
  </form>
</template>

<script>
import Input from '@/components/shared/Input'
import Button from '@/components/shared/Button'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      user: {
        username: 'Admin',
        password: '12345'
      }
    }
  },
  methods: {
    ...mapActions(['LOGIN_USER']),
    takeUsername(data) {
      this.user.username = data
    },
    takePassword(data) {
      this.user.password = data
    },
    login() {
      this.LOGIN_USER(this.user)
    }
  },
  components: {
    Input,
    Button
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  position: absolute;
  left: 60%;
  top: 50%;
  width: 300px;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  background-color: $white;

  @include media992max {
    left: 32%;
  }
  @include media768max {
    left: 28%;
  }
  @include media576max {
    left: 22%;
  }
  @include media480max {
    left: 11%;
  }
  @include media380max {
    left: 7%;
  }

  &__input {
    margin-bottom: 20px;
  }

  &__main {
    padding: 25px 20px 0px 20px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $gray-light;
    padding: 5px 0px;
  }
}
</style>
