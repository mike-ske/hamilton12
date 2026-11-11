<?php
namespace Database\Seeders;
use App\Models\User;use Illuminate\Database\Seeder;use Illuminate\Support\Facades\Hash;
class AdminUserSeeder extends Seeder{public function run():void{$email=env('ADMIN_EMAIL');$password=env('ADMIN_PASSWORD');if(!$email||!$password)throw new \RuntimeException('Set ADMIN_EMAIL and ADMIN_PASSWORD before seeding.');User::updateOrCreate(['email'=>$email],['name'=>'Careers Superadmin','password'=>Hash::make($password),'is_admin'=>true,'role'=>'superadmin','is_active'=>true]);}}
