<?php
use Illuminate\Database\Migrations\Migration;use Illuminate\Database\Schema\Blueprint;use Illuminate\Support\Facades\Schema;
return new class extends Migration{public function up():void{Schema::table('admin_api_tokens',fn(Blueprint $t)=>$t->timestamp('expires_at')->nullable()->index());}public function down():void{Schema::table('admin_api_tokens',fn(Blueprint $t)=>$t->dropColumn('expires_at'));}};
